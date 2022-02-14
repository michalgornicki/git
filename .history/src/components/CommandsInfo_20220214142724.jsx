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

    </div>
  );
};

export default Structure;
