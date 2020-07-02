const { Kafka, logLevel } = require('kafkajs');

const kafka = new Kafka({
  logLevel: logLevel.INFO,
  brokers: ['pkc-4nym6.us-east-1.aws.confluent.cloud:9092'],
  clientId: 'example-consumer',
  ssl: {
    rejectUnauthorized: false
  },
  sasl: {
   mechanism: 'plain',
   username: '',
   password: '',
  },
})

const consume_example = kafka.consumer({ groupId: 'test-consumer-group1234' , fromOffset: 0})
const run_consumer_example = async () => {
  const ccloud_topic = 'asdf'
  await consume_example.connect();
  await consume_example.subscribe({ topic: ccloud_topic });
  await consume_example.run({
      eachMessage: async ({ topic, partition, message }) => {
          console.log(`${message.value}`);
      },
  });
}

run_consumer_example().catch(e => console.error(`[example/consumer_1] ${e.message}`, e))
