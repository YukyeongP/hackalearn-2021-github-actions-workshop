// issue를 생성하기 위한 main 함수

// github action이 제공하는 package
const core = require("@actions/core");
const github = require("@actions/github");

async function run() {
    const issueTitle = core.getInput("issueTitle");
    const joke = core.getInput("joke");
    const token = core.getInput("repoToken")

    try {
        const octokit = new github.Github(token);
        const newIssue = awiat.octokit.issues.create({
            repo: github.context.repo.repo,
            owner: github.context.repo.owner,
            title:issueTitle,
            body: "![Joke Image](" + joke + ")"
        });
    } catch (error) {
        core.setFailed(error.message);
    }
}

run();