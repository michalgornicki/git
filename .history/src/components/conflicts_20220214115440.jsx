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

//GIT REBASE

git checkout new_feature
git fetch upstream master
git rebase upstream master
git push origin HEAD or git push origin <currentbranch>
//HEAD means top of current branch, without need to write name of this branch.

//GIT 

          `}</pre>
        </div>
      </div>
    </div>
  );
};

export default Conflicts;
