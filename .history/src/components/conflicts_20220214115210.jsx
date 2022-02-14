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

git checkout new_feature
git fetch upstream master
git rebase upstream master
git push origin HEAD


          `}</pre>
        </div>
      </div>
    </div>
  );
};

export default Conflicts;
