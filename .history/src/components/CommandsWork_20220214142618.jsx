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
      <div className="js-item">
        {" "}
        <div className="">git checkout: </div>
        <div className="text-pink">
          <pre>{`

git checkout -b lower-branch

Switched to a new branch 'lower-branch'

git checkout master

Switched to a branch 'master'


//Use git checkout to switch branches or create new branch.
//Branch is a pointer to a specific timeline of the Git history.
//Creating branches is key feature for working in team, you can work on separate branch without affecting core of the project code.

          `}</pre>
        </div>
      </div>
      <div className="js-item">
        {" "}
        <div className="">git merge: </div>
        <div className="text-pink">
        <img className="text-pink__image" src={merge} alt="" />

          <pre>{`
git merge lower-branch

Updating f5b6e2f..741822a
Fast-forward
 file.txt | 1 +
 1 file changed, 1 insertion(+)
 create mode 100644 file.txt

//This command try to merge content of selected branch into current branch.
//git merge is creating new commit containing every change that has been made since it branched from master.
//git merge helps keep information about all the changes made in feature branch.
//Merge is recognized as safe method for integrating changes.
//It can be easily undone.
          `}</pre>
        </div>
      </div>
    </div>
  );
};

export default Structure;
