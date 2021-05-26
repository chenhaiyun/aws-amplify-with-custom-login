### Amplify React UI 自定义登录界面

本案例介绍如何从创建一个React Amplfiy的项目，并使用cognito作为用户认证，同时支持facebook的登录，其中主要的是介绍如何自定义Amplfiy的登录界面

#### 1. 创建React Typescript 项目

##### 使用Creact-React-App创建 React Typescript 项目

~~~
$ npx create-react-app aws-amplify-customize-login --use-npm --template typescript
~~~

##### 给项目添加 Eslint

~~~
$ npx eslint --init
✔ How would you like to use ESLint? · problems
✔ What type of modules does your project use? · esm
✔ Which framework does your project use? · react
✔ Does your project use TypeScript? · No / Yes
✔ Where does your code run? · browser
✔ What format do you want your config file to be in? · JavaScript
~~~

##### Add Auto Fix On Save in Vscode

在项目根目录下新建 .vscode 目录，并新建 settings.json 文件，文件内容如下

~~~
{
    "editor.formatOnSave": true
}
~~~

#### 2. 给项目添加Amplfiy

~~~
# 安装 aws-amplify 
$ npm install -g @aws-amplify/cli

# 将amplify 添加到 react
$ amplify init

 Initialize the project with the above configuration? No
? Enter a name for the environment dev
? Choose your default editor: Visual Studio Code
? Choose the type of app that you're building javascript
Please tell us about your project
? What javascript framework are you using react
? Source Directory Path:  src
? Distribution Directory Path: build
? Build Command:  npm run-script build
? Start Command: npm run-script start
Using default provider  awscloudformation
? Select the authentication method you want to use: AWS profile

~~~

#### 3. 给项目添加 Cognito 用户认证

~~~
$ amplify add auth
Do you want to use the default authentication and security configuration? Default configuration
Warning: you will not be able to edit these selections. 
How do you want users to be able to sign in? Email
Do you want to configure advanced settings? No, I am done.

$ amplify push
~~~



#### 4. 安装 Amplify 库	

~~~
$ npm install aws-amplify @aws-amplify/ui-react

~~~

#### 5.添加Facebook登录

~~~
$ amplify update auth 
Please note that certain attributes may not be overwritten if you choose to use defaults settings.
Using service: Cognito, provided by: awscloudformation
What do you want to do? Apply default configuration with Social Provider (Federation)
What domain name prefix do you want to use? amplifycustomizeloginl37272254-37272254
Enter your redirect signin URI: http://localhost:3000/
? Do you want to add another redirect signin URI No
Enter your redirect signout URI: http://localhost:3000/
? Do you want to add another redirect signout URI No
Select the identity providers you want to configure for your user pool: Facebook

You've opted to allow users to authenticate via Facebook.  If you haven't already, you'll need to go to https://developers.facebook.com and create an A
pp ID. 

Enter your Facebook App ID for your OAuth flow:  8536xxxxxxxxxx888805
Enter your Facebook App Secret for your OAuth flow:  ad2057450bxxxxxxxxx516cbd2ef3a
Successfully updated auth resource awsamplifycustomizelf79ed719 locally

$ amplify push


~~~

