/**
 * @param {import('probot').Probot} app
 */
module.exports = (app) => {
    app.log("Yay! The app was loaded!")

    app.on("issues.opened", async (context) => {
        return context.octokit.issues.createComment(
            context.issue({ body: "Hello, World!" })
        )
    })

    app.on("push", (context) => {
        context.log.info(
            "Code was pushed to the repo, what should we do with it?"
        )
    })
}
