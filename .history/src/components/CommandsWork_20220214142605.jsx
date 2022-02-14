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
      <div className="js-item">
        {" "}
        <div className="">git push: </div>
        <div className="text-pink">
          <pre>{`

git push <remote destination> <branch>
git push origin master

Enumerating objects: 15, done.
Counting objects: 100% (15/15), done.
Delta compression using up to 8 threads
Compressing objects: 100% (9/9), done.
Writing objects: 100% (9/9), 1.29 KiB | 1.29 MiB/s, done.
Total 9 (delta 7), reused 0 (delta 0), pack-reused 0     
remote: Resolving deltas: 100% (7/7), completed with 6 local objects.
To https://github.com/michalgornicki/javascript
   c1ef9d3..46b6abd  master -> master

//With this command we can push our changes from local directory to origin remote - Github repository.
//After "git push" we must specify remote branch where our commit will land.

          `}</pre>
        </div>
      </div>
      
    </div>
  );
};

export default Structure;
