const Conflicts = () => {
  document.addEventListener("DOMContentLoaded", function () {
    console.log(document.getElementsByClassName("body")[0].getBoundingClientRect());
  });

  return (
    <div className="body">
      <div className="js-item">
        {" "}
        <div className="">Upstream is ahead of origin</div>
        <div className="text-pink">
          <pre>{`

git push -f origin HEAD
//When you changes the history, you must force push changes to your origin.

and later

//GIT REBASE

git checkout new_feature
git fetch upstream master
git rebase upstream master
git push origin HEAD or git push origin <currentbranch>
//HEAD means top of current branch, without need to write name of this branch.

or

//GIT MERGE

git checkout new_feature
git fetch upstream master
git merge upstream master
git push origin HEAD or git push origin <currentbranch>

          `}</pre>
        </div>
      </div>
      <div className="js-item">
        {" "}
        <div className="">Working on feature on shared branch on upstream</div>
        <div className="text-pink">
          <pre>{`

//Other person working on this shared branch pushed changes that conflict with yours.
//To solve this conflict you can rebase

git checkout shared_feature
git fetch upstream shared_feature
git rebase upstream shared_feature
git push upstream shared_feature

          `}</pre>
        </div>
      </div>
    </div>
  );
};

export default Conflicts;
