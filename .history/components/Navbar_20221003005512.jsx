.container {
  height: 50px;
  background-color: black;
  color: white;
  display: flex;
  align-items: center;
  justify-content: space-between;
  font-size: 18px;
  padding: 0px 100px;
  position: relative;
  overflow: hidden;
}

.listItem {
  display: inline;
  margin-right: 30px;
  font-size: 14px;
  /* font-weight: 300; */
  color: lightgray;
  cursor: pointer;
}

.hamburger {
  display: none;
  width: 25px;
  height: 20px;
  cursor: pointer;
}

.line {
  width: 100%;
  height: 3px;
  background-color: white;
}

.menu {
  display: none;
  position: fixed;
  width: 50vw;
  height: calc(100vh - 50px);
  background-color: black;
  top: 50px;
  /* right: 0px; */
  z-index: 9999;
  margin: 0;
  padding: 0;
  font-weight: bold;
  color: lightgray;
  list-style: none;
  transition: all 1s ease;
}

@media screen and (max-width: 480px) {
  .container {
    padding: 0px 20px;
  }

  .listItem {
    display: none;
  }

  .hamburger {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
  }
  .menu {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-around;
  }
}