import Queue from "bull";
import Message from "./database/message.model";
import config from "./config/config";

// Create a Queue
const sendMessageQueue = new Queue("sendMessage", {
  redis: config.redis
});

const processJob = () => {
  console.log("Waiting for job...");

  sendMessageQueue.on("completed", async (job, result) => {
    console.log("Job completed!");
    await job.remove();
  });

  sendMessageQueue.on("failed", job => {
    const { failedReason } = job.toJSON();
    console.log(`{Job ${job.id} failed with reason: ${failedReason}}`);
  });

  sendMessageQueue.on("error", err => console.log(`{Error occured: ${err}}`));

  sendMessageQueue.process(async (job, done) => {
    try {
      await Message.create(job.data);
      console.log('Job saved to DB!')
      done(null);
    } catch (error) {
      done(error.message);
    }
  });
};

export default processJob;
