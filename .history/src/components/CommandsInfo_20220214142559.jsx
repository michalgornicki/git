const Structure = () => {
  return (
    <div className="">
      <div className="js-item">
        {" "}
        <div className="">git status: </div>
        <div className="text-pink">
          <pre>{`
git status

On branch master
Your branch is up to date with 'origin/master'.

nothing to commit, working tree clean

//Git status show us status of our changes:
//1. On which branch we are working.
//2. Our local branch master is up to date with remote branch master.
//   Origin means place which is "source of truth" of state of our project, which is Github in this case.
//3. Nothing to commit - we didnt add any changes to code yet to "commit".
          `}</pre>
        </div>
      </div>


      <div className="js-item">
        {" "}
        <div className="">git log: </div>
        <div className="text-pink">
          <pre>{`

git log

commit 52451db1ff6f6e1d2a3c45dc51050ec6df550c0e (HEAD -> master, origin/master)
Author: Michal Gornicki <gornickimichal@gmail.com>
Date:   Wed Feb 9 12:56:32 2022 +0100

    add new items

commit 78a05f0907064f5dadd4de2284dc3b10f9e7a6a7
Author: Michal Gornicki <gornickimichal@gmail.com>
Date:   Wed Feb 9 12:15:36 2022 +0100

    add new hooks

//With this command we can see information about our latest commits.

git log --oneline --graph
//Shows git log as a visual graph.

          `}</pre>
        </div>
      </div>
      <div className="js-item">
        {" "}
        <div className="">git remote: </div>
        <div className="text-pink">
          <pre>{`

git remote
//List the remote connections you have to other repositories.

git remote -v
//Same as above but with URL links to each repository.

git remote add <name> <url>
//Create a new connection to a remote repository.


//Before we push our commit to remote repository we must add connection to it.

          `}</pre>
        </div>
      </div>

      <div className="js-item">
        {" "}
        <div className="">git diff: </div>
        <div className="text-pink">
          <pre>{`

git diff

-  Effect hook execute function or functions after every render of its component.
+  Effect hook execute function or functions after every render of its component by default.

//This command shows changes between commits, commit and working tree, two files etc. 

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
        <div className="">git branch: </div>
        <div className="text-pink">
          <pre>{`
git branch
//Show all local branches

git branch -r
//Show all remote branches

git branch -a
//Show all local and branches
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
        <div className="">Ignoring files in git </div>
        <div className="text-pink">
          <pre>{`

//Git creates .gitignore file in project's root folder.
//You can include here file names you want to be ignored by git.
//.gitignore can ignore files by pattern, for example "*.txt" for ignoring all txt files.

          `}</pre>
        </div>
      </div>
    </div>
  );
};

export default Structure;
