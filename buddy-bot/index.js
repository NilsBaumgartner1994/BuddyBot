/**
 * This is the main entrypoint to your Probot app
 * @param { {app: import('probot').Application} } app
 */

function handlePushEvent(app, context){
  console.log("Wow its pushed ?");
  app.log.info(context);
}

module.exports = ({ app }) => {
  // Your code here
  app.log.info("Yay, the app was loaded!");


  app.on("push", async (context) => {
    // Code was pushed to the repo, what should we do with it?
    handlePushEvent(app,context);
  });

  app.on("issues.opened", async (context) => {
    console.log("Issue opened ...");
    const issueComment = context.issue({
      body: "Thanks for opening this issue!",
    });
    return context.octokit.issues.createComment(issueComment);
  });

  // For more information on building apps:
  // https://probot.github.io/docs/

  // To get your app running against GitHub, see:
  // https://probot.github.io/docs/development/
};
