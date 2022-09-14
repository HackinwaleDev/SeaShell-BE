class ShellService {

  static async getAllShells() {

    try {

      return [
        {
          name: 'Shell 1',
          species: 'jellyshell',
          description: 'something jelly and it is on the periodt'
        },
        {
          name: 'Shell 2',
          species: 'sushishell',
          description: 'something shushi and it is on the periodt'
        },
        {
          name: 'Shell 3',
          species: 'panlashell',
          description: 'something panla and it is on the periodt'
        },
      ]

    } catch (e) {
      return e.message;
    }

  }

}

module.exports = ShellService;