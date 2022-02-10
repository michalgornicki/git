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
git add <filename> - add one file for git tracking.

git add . - add all files in working directory for git tracking.

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

//With this command we can see information about our latest commits

          `}</pre>
          </div>
      </div>

      </div>
  );
};

export default Arrays;
