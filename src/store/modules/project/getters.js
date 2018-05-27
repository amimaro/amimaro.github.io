export default {
  projects: state => {
    const repos = [
      "Provas-POSCOMP",
      "generator-angular-api",
      "dungeon-crawler",
      "game-of-life",
      "strobe",
      "is-stargazer"
    ];
    return state.list
      .filter(project => {
        if (repos.includes(project.name)) return true;
        return false;
      })
      .sort((a, b) => {
        return a.stargazers_count < b.stargazers_count;
      });
  }
};
