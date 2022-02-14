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
//download repository files

git checkout -b <new branch name>

//Adding files, making changes

git add .
git commit -m "new commit name"

          `}</pre>
        </div>
      </div>
    </div>
  );
};

export default Structure;