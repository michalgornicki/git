const Structure = () => {
  return (
    <div className="">
        <div className="js-item">
        {" "}
        <div className="">Workflow from beginning to : </div>
        <div className="text-pink">
          <pre>{`
git clone
git remote add <name> <url>
//download repository files and add our remote workplace

git checkout -b <new branch name>
//create new feature branch

//add files, make changes

git add .
git commit -m "new commit name"
//stage files and create commit (snapshot) of changes

git push origin master
//push feature branch to repository, to master branch

//create pull request on github



          `}</pre>
        </div>
      </div>
    </div>
  );
};

export default Structure;
