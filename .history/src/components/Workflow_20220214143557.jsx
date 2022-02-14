const Workflow = () => {
  return (
    <div className="">
        <div className="js-item">
        {" "}
        <div className="">Workflow from beginning to adding new feature from our branch: </div>
        <div className="text-pink">
          <pre>{`
1. git clone
2. git remote add <name> <url>
//download repository files and add remote repo to your computer (on Github for example).

3 git checkout -b <new branch name>
//create new feature branch

//add files, make changes

git add .
git commit -m "new commit name"
//stage files and create commit (snapshot) of changes

git push origin master
//push feature branch to repository, to master branch

//create pull request on github

//review code and merge pull request
          `}</pre>
        </div>
      </div>
    </div>
  );
};

export default Workflow;
