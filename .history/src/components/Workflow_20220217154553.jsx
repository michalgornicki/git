const Workflow = () => {
  return (
    <div className="">
        <div className="js-item">
        {" "}
        <div className="">Workflow from beginning to adding new feature from our branch: </div>
        <div className="text-pink">
          <pre>{`
1. git clone
2. git remote add <name> <url>
//download repository files and add remote repo to your computer (on Github for example).

3. git checkout -b <new branch name>
//create new feature branch

4. add files/make changes

5. git add .
6. git commit -m "new commit name"
//stage files and create commit (snapshot) of changes

7. git push origin master
//push feature branch to repository, to master branch

8. create pull request on github

9. review code and merge pull request

10. Repeat from 
          `}</pre>
        </div>
      </div>
    </div>
  );
};

export default Workflow;
