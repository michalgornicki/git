const Arrays = () => {
  return (
    <div className="container">
      <div className="js-item">
        {" "}
        <div className="">Setup: </div>
        <div className="text-pink">
          <pre>{`
First you should:
1. Install git from git website:
https://git-scm.com/book/en/v2/Getting-Started-Installing-Git
2. Signup for Github account (or similar alternative like Gitlab) and create new repository.

If you use Microsoft Visual Studio Code (which i recommend) you can skip first point, because it have git built-in.
You can control git using terminal.
          `}</pre>
        </div>
      </div>
      <div className="js-item">
        {" "}
        <div className="">git clone: </div>
        <div className="text-pink">
          <pre>{`
git clone https://github.com/michalgornicki/react.git

//Cloning repo will download all of the project's code and metadata from source.
          `}</pre>
        </div>
      </div>

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
        <div className="">git checkout: </div>
        <div className="text-pink">
          <pre>{`

git checkout -b lower-branch

Switched to a new branch 'lower-branch'

git checkout master

Switched to a branch 'master'


//Use git checkout to switch branches or create new branch.
//Branch is a pointer to a specific timeline of the Git history.

          `}</pre>
        </div>
      </div>
      <div className="js-item">
        {" "}
        <div className="">git merge: </div>
        <div className="text-pink">
          <pre>{`

git merge lower-branch

Updating f5b6e2f..741822a
Fast-forward
 file.txt | 1 +
 1 file changed, 1 insertion(+)
 create mode 100644 file.txt

//This command try to merge content of selected branch into current branch. 

          `}</pre>
        </div>
      </div>
      <div className="js-item">
        {" "}
        <div className="">git branch -D: </div>
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
//After creating pull request anyone with push access to the repository can complete the merge your pulled request in.

          `}</pre>
        </div>
      </div>
    </div>
  );
};

export default Arrays;
