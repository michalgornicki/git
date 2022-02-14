const Structure = () => {
  return (
    <div className="">
      <div className="js-item">
        {" "}
        <div className="">git add: </div>
        <div className="text-pink">
          <pre>{`
git add <filename>
//add one file for git tracking.

git add
//add all files in working directory for git tracking.

//Git add is adding changes to "staging area".
//When we will add files for tracking, "git status" will return information about changes to be commited.
          `}</pre>
        </div>
      </div>

      <div className="js-item">
        {" "}
        <div className="">git commit: </div>
        <div className="text-pink">
          <pre>{`
git commit -m "add links to navigation"

//Git commit takes everything from the staging area and makes a "snapshot" of the current state of your repository that is associated with a unique identifier.
//We need to add detailed message to our commit with flag -m, to later identify what meaned each commit.
//After adding files for tracking, "git status" will return information about changes to be commited.
          `}</pre>
        </div>
      </div>
    </div>
  );
};

export default Structure;
