const MongoDB = require('mongodb')

const MongoClient = MongoDB.MongoClient;

const url = 'mongodb://localhost:27017/';
const dbName = 'resumeDB';
const resumeCollection = 'resumes'

exports.createDB = () => {
  MongoClient.connect(url, { useUnifiedTopology: true }).then(client => {
    let db = client.db(dbName);
    db.createCollection(resumeCollection, {
      validator: {
        $jsonSchema: {
          bsonType: "object",
          required: ["name", "jobTitle", "jobDescription", "currentCompany"],
          properties: {
            name: {
              bsonType: "string",
              description: "must be a string and is required"
            },
            jobTitle: {
              bsonType: "string",
              description: "must be a string and is required"
            },
            jobDescription: {
              bsonType: "string",
              description: "must be a string and is required"
            },
            currentCompany: {
              bsonType: "string",
              description: "must be a string and is required"
            }
          }
        }
      }
    }).then(collection => {
      let data = [
        { name: 'Anthony', jobTitle: 'jobTitle', jobDescription: 'jobDescription', currentCompany: 'currentCompany' },
        { name: 'Luke', jobTitle: 'jobTitle', jobDescription: 'jobDescription', currentCompany: 'currentCompany' }
      ];
      collection.insertMany(data).then(res => {
        console.log("Number of documents inserted: " + res.insertedCount);
        console.log(res);
        client.close();
      }).catch(err => console.log(err));
    })
  });
}


exports.insertResume = resume => {
  return new Promise((resolve, reject) => {
    MongoClient.connect(url, { useUnifiedTopology: true }).then(client => {
      client.db(dbName).collection(resumeCollection).insertOne(resume).then(res => {
        resumeID = res.insertedId;
        client.close();
        console.log('insertResume - resumeID: ', resumeID)
        resolve(resumeID);
      }).catch(err => {
        console.error(err)
        reject(new Error(err))
      })
    }).catch(err => {
      console.error(err)
      reject(new Error(err))
    })
  })
}

exports.getResumeById = async function(id) {
  let client = await MongoClient.connect(url, { useUnifiedTopology: true })
  let result = await client.db(dbName).collection(resumeCollection).findOne({ '_id': MongoDB.ObjectID(id) });
  client.close();
  return result;
};


exports.getResumeByNameRegex = regex => {
  return new Promise((resolve, reject) => {
    MongoClient.connect(url, { useUnifiedTopology: true }).then(client => {
      const result = client.db(dbName).collection(resumeCollection).find({ name: { $regex: regex } }).toArray();
      client.close();
      resolve(result);
    }).catch(err => {
      console.error(err)
      reject(new Error(err))
    })
  })
}

exports.getAllResumes = async () => {
  let client = await MongoClient.connect(url, { useUnifiedTopology: true });
  const result = await client.db(dbName).collection(resumeCollection).find().toArray();
  client.close();
  return result;
}
