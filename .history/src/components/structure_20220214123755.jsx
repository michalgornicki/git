const Structure = () => {
  return (
    <div className="">
        <div className="js-item">
        {" "}
        <div className="">git init: </div>
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
//

          `}</pre>
        </div>
      </div>
    </div>
  );
};

export default Structure;
