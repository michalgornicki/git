import rebase from "../rebase.png";
import merge from "../merge.png";

const CommandsWork = () => {
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
      <div className="js-item">
        {" "}
        <div className="">git rebase: </div>
        <div className="text-pink">
          <img className="text-pink__image" src={rebase} alt="" />

          <pre>{`

git rebase <newparent> <branch> or
//Without checkout.
git rebase <newparent>
//It will rebase checkout branch to selected new parent.

//This command is alternative approach to integrate changes from our feature branch to main branch.
//git rebase shouldn't be used on public branches, it should be used only on localy.
//git rebase create linear (without forks) code history.
//Rebasing rewrites the project history by creating new commits for each commit of feature branch on tip of master branch.

          `}</pre>
        </div>
      </div>
      <div className="js-item">
        {" "}
        <div className="">git branch -D (deleting branch): </div>
        <div className="text-pink">
          <pre>{`

git branch -D lower-branch

Deleted branch lower-branch (was 741822a).


//After merging our branch to master branch we can delete it with this command.

          `}</pre>
        </div>
      </div>
      <div className="js-item">
        {" "}
        <div className="">Create pull request: </div>
        <div className="text-pink">
          <pre>{`

//After pushing new branch to remote you can create new pull request on Github.
//After creating pull request anyone with push access to the repository can complete the merge your pulled request into master branch.

          `}</pre>
        </div>
      </div>
      <div className="js-item">
        {" "}
        <div className="">git restore: </div>
        <div className="text-pink">
          <pre>{`

git restore <filename>
//Restore state of single file.

git restore .
//Restore state of all files in working directory.

git restore --staged <filename>
//Unstage file.

//git restore is used to restore/discard the uncommitted local changes of files.
//It also can be used for unstage files (revert git add).
//This command returns state of local directory to last commit state.

          `}</pre>
        </div>
      </div>
      <div className="js-item">
        {" "}
        <div className="">git fetch: </div>
        <div className="text-pink">
          <pre>{`

git fetch
//This command downloads new information from the remote about the status of the repo.

git status

On branch master
Your branch is behind 'origin/master' by 2 commits, and can be fast-forwarded.
  (use "git pull" to update your local branch)

nothing to commit, working tree clean

//After git fetch when we use git status we can check if our local branch is behind remote branch.
//We can receive instruction to use git pull to update local files.

          `}</pre>
        </div>
      </div>
      <div className="js-item">
        {" "}
        <div className="">git pull: </div>
        <div className="text-pink">
          <pre>{`

git pull

//The git pull command is a shorthand for running two commands: git fetch followed by a git merge.
// Use this command to update files on local branch from remote.

          `}</pre>
        </div>
      </div>
      <div className="js-item">
        {" "}
        <div className="">git stash: </div>
        <div className="text-pink">
          <pre>{`
git stash

//Save working directory changes to stash, then you can change to other branch and work on it and perform any other Git operations.
//After moving unstaged, uncommited changes to stash working tree is clean.
//git stash will not stash new files that has not been staged yet (only files staged before with staged or unstaged changes).

/git stash -u

//-u flag tells git to stash also untracked/unstages before files.

git stash pop

//Popping stash moves changes from stash and reapplies them to your working directory.

git stash apply

//This command reapplies changes from stash to your working directory but it also keeps them in stash. It can be used to apply same changes to multiple branches.
          `}</pre>
        </div>
      </div>
    </div>
  );
};

export default CommandsWork;
