class studen {
  constructor(fname, lname) {
    this.fname = fname;
    this.lname = lname;
  }

  set setFname(name) {
    this.fname = name;
  }

  get getFname() {
    console.log(this.fname);
    return this.fname;
  }

  fullname() {
    console.log(`${this.lname + this.fname}`);
  }
}

let st = new studen("Duy", "Ngo Quoc");

st.setFname = "ABC";
st.getFname;
st.fullname();
