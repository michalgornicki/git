import rebase from "../rebase.png";
import merge from "../merge.png";

const Basics = () => {
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
        <div className="">git init: </div>
        <div className="text-pink">
          <pre>{`
git init

//When you are creating new directory on local machine you should start working with git using this command to turn directory into a git repository.
          `}</pre>
        </div>
      </div>


    </div>
  );
};

export default Basics;
