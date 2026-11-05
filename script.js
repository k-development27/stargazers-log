const repositoryList = document.querySelector("#repositories");

async function loadRepositories() {
  try {
    const response = await fetch("events.json");
    if (!response.ok) {
      throw new Error(`Could not load repositories (${response.status}).`);
    }

    const repositories = await response.json();
    if (!Array.isArray(repositories)) {
      throw new Error("The repository data must be a list.");
    }

    repositoryList.replaceChildren();

    if (repositories.length === 0) {
      repositoryList.append(document.createElement("li"));
      repositoryList.firstElementChild.textContent = "No starred repositories yet.";
      return;
    }

    for (const repository of repositories) {
      const item = document.createElement("li");
      const link = document.createElement("a");
      const description = document.createElement("p");
      const starredAt = document.createElement("time");

      link.href = repository.url;
      link.textContent = repository.repository;
      description.textContent = repository.description;
      starredAt.dateTime = repository.starred_at;
      starredAt.textContent = `Starred on ${repository.starred_at}`;

      item.append(link, description, starredAt);
      repositoryList.append(item);
    }
  } catch (error) {
    repositoryList.replaceChildren();
    const message = document.createElement("li");
    message.textContent = "Unable to load starred repositories.";
    repositoryList.append(message);
    console.error(error);
  }
}

loadRepositories();
