const Generator = require('yeoman-generator');
const askName = require('inquirer-npm-name');
const mkdirp = require('mkdirp');

const DEFAULT_PROJECT_NAME = 'current-foler';

module.exports = class extends Generator {
    initializing() {
        this.props = {};
    }

    prompting() {
        return askName({
            name: 'projectPath',
            message: 'Your project path: ',
            default: DEFAULT_PROJECT_NAME
        }, this).then(props => {
            this.props.projectPath = props.projectPath === DEFAULT_PROJECT_NAME ? '' : props.projectPath;
        });
    }

    writing() {
        let {projectPath} = this.props;

        this.destinationRoot();

        if (projectPath) {
            mkdirp(projectPath);
        }

        this.fs.copy(__dirname + '/templates');
    }

    install() {
        const root = this.destinationPath(this.props.projectPath);

        this.destinationRoot(root);

        this.installDependencies({
            bower: false,
            npm: false,
            yarn: true
        });
    }
}