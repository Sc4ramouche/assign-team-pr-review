const core = require('@actions/core');
const github = require('@actions/github');

const main = async () => {
  try {
    const token = core.getInput('github_token', { required: true });
    const team_slug = core.getInput('team_slug', { required: true });
    const org = core.getInput('org', { required: true });

    const octokit = new github.getOctokit(token);

    const team = octokit.rest.teams.getByName({
      org,
      team_slug,
    });

    // TODO: get all the team members
    // response example: https://docs.github.com/en/rest/teams/teams#get-a-team-by-name

    // TODO: acquire current PR number

    // TODO: assign team members to the PR
    // request example: https://docs.github.com/en/rest/pulls/review-requests#request-reviewers-for-a-pull-request

    // TODO: check if team members are already assigned to PR
  } catch (error) {
    core.setFailed(error.message);
  }
};

main();
