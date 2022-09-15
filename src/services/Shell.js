// import the model here 
const { findByIdAndRemove, findByIdAndUpdate } = require('../models/Shell');
const Shell = require('../models/Shell');

class ShellService {

  /**
   * Method to RETRIEVE ALL shells
   * @returns { Promise<{}> }
   */
  static async getAllShells() {

    try {

      const data = await Shell.find();

      return data;

    } catch (e) {
      return e.message;
    }

  }

  /**
   * Method to ADD new shell
   * @param { Object } shellObj - Should contain the `name`, `specie` and `description`
   * @returns { Promise<> }
   */
  static async addShell(shellObj) {    
    try {

      const result = await Shell.create(shellObj);
    
      return result;

    } catch (e) {
      return e.message;
    }
    

  }

  /**
   * Method to UPDATE shell
   * @param { string } shellId - ID of the shell to be updated
   * @param { Object } shellObj - Object containing property(-ies) to be updated
   * @returns { Promise<{}> }
   */
  static async updateShell(shellId, shellObj) {
    try {

      const result = await Shell.updateOne({ id: shellId}, {
          $set: shellObj
        }, 
        {new: true}
      );

      return result;
    } catch (e) {
      return e.message;
    }
  }

  /**
   * Method to REMOVE a shell from the collection
   * @param { string } shellId - ID of the shell to be deleted
   * @returns { Promise<{}> }
   */
  static async deleteShell(shellId) {
    try {
      const result = await Shell.deleteOne({ id: shellId });

      return result;

    } catch (e) {
      return e.message;
    }
  }

}

module.exports = ShellService;