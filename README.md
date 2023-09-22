# Deploying Machine Learning Models to the Web

One essential and last phase of the CRISP-DM data framework is deployment. The key focus in this phase is the usability of the developed model by intended users or customers. Depending on the type of solution and use case, this can involve deploying and integrating the model on any medium like the web, a mobile application, a hardware-embedded system, etc. While this might "sound easy,” many beginner ML engineers find it daunting to deploy their projects on the web for their intended users to test and for their solutions to solve their users' problems.

In this workshop, Bolaji will introduce you to ML model deployment by showing you the steps and processes involved with turning a machine learning model into an API with Python and Flask, testing the API, building a web application, and deploying it to the cloud for global usage. We would also discuss several other alternative JavaScript frameworks and tools you can consider.

---

This repository contains the workshop materials, lesson notes, machine learning model notebook, serilized model, web application code, and links to further resources. You can follow the workshop lessons and build the project yourself or use the materials to learn at your own pace.

In this workshop, we will build the following:

- A simple machine learning model that predicts the personality type of an individual based off their messages in conversations using Python, Scikit-learn, and other libraries.
- A web application and API that consumes the model using HTML, CSS, JavaScript, and Flask.
- A web application and API that consumes the model using HTML, CSS, JavaScript, Nextjs, and Flask.
- A web application and API that consumes the model using HTML, CSS, JavaScript, and FastAPI.
- A web application and API that consumes the model using HTML, CSS, JavaScript, Nextjs, and FastAPI.
- An AI web application using Nextjs and OpenAPI.

[Demo GIF]

---

## Table of Contents

- [🎧 Overview](#-overview)
- [🛠 Prerequisites and Installation Guide](#-prerequisites-and-installation-guide)
- [👨🏾‍🏫 Workshop Lessons](#-workshop-lessons)
- [🚀 What's Next?](#-whats-next)
- [📑 Further Resources](#-further-resources)
- [👩🏽‍💻 Contributors Guide](#-contributors-guide)
- [⚖️ License](#-license)

---

## 🎧 Overview

Workshop duration: three (3) hours.

At the end of this workshop; you should be able to:

- Explain what machine learning and a machine learning model are to your friends and family.
- Understand how the CRISP-DM data framework works.
- Understand the fundamentals of building a machine learning model using the Python programming language.
- Understand how to export and serialize a machine learning model.
- Understand how to turn a machine learning model into an API using the Flask Python framework.
- Understand how to build a web application using the FastAPI Python framework.
-
- Understand how to build a web application using the Nextjs JavaScript framework.
- Understand how to deploy a web application to the cloud using Fly.

---

This workshop has been presented at the following events:

- [React Alicante 2023](https://reactalicante.es/) in Alicante, Spain 🇪🇸.
- Your next event or conference? You can invite me by [sending a message](https://twitter.com/iambolajiayo).

## 🛠 Prerequisites and Installation Guide

Generally, you need the following:

- A curious mind and desire to learn.
- An understanding of or familiarity with the first five phases of the CRISP-DM data-mining framework.
- A working laptop running on any operating system (Windows, Linux, or macOS).
- Ability to navigate through the command-line interface (CLI).
- Some existing machine learning model development knowledge (or an interest at least).
- Some basic understanding of the Python programming language.
- Some basic understanding of the JavaScript programming language.
- Experience using Reactjs and Nextjs frameworks.

To make the workshop a smooth process, we will use [Google Colab](https://colab.google?utm_source=ba-deploy-ml-web-workshop) for the machine learning model development. This will enable us to run a hosted Jupyter Notebook on the cloud (with GPU and TPU computing resources) and avoid issues with installing all the Python packages locally (the future is cloud!). All you have to do is create a free Google account if you don't have one already and open the Notebook in Google Colab.

But if you prefer local (I strongly advise against this; at least for this workshop), you should install [Anancoda](https://anaconda.com/download?utm_source=ba-deploy-ml-web-workshop) to use Jupyter Notebook on your local computer. You will need to install and import all the required packages yourself too and resolve any conflicts that might arise.

> **Note**
>
> [Jupyter Notebooks](https://jupyter.org?utm_source=ba-deploy-ml-web-workshop) allow you to combine executable code and rich text in a single document, along with images, HTML, LaTeX and more.

---

You should have the following software and packages installed on your computer. Kindly follow the guide in each toggle to install them.

<details>

<summary>Git and GitHub</summary>
<br />

> [Git](https://github.com/pallets/flask?utm_source=ba-deploy-ml-web-workshop) is a free and open-sourced distributed version control system.
>
> [GitHub](https://github.com?utm_source=ba-deploy-ml-web-workshop) is a code hosting platform for version control and collaboration.

Download and install Git from [this website](https://git-scm.com/downloads?utm_source=ba-deploy-ml-web-workshop) for all operating systems or follow this [installation guide](https://git-scm.com/book/en/v2/Getting-Started-Installing-Git?utm_source=ba-deploy-ml-web-workshop).

Once installed successfully, confirm the version using the command:

```bash
git --version
```

<br />

Next, create a [free GitHub account](https://github.com/signup?utm_source=ba-deploy-ml-web-workshop) if you don't have one already.

> **Note**
>
> Bonus: If you're a student, you should check out the [GitHub Student Developer Pack](https://education.github.com/pack?utm_source=ba-deploy-ml-web-workshop), which gives students free access to the best developer tools (paid tools/services/courses for free) in one place so they can learn by doing.

</details>

<details>

<summary>Python 3 and PIP</summary>
<br />

> [Python](https://python.org?utm_source=ba-deploy-ml-web-workshop) is a general-purpose programming language that lets you work quickly and integrate systems more effectively.
>
> [PIP](https://pypi.org/project/pip?utm_source=ba-deploy-ml-web-workshop) is a package manager for installing Python packages or modules.

Download and install Python 3 from [this website](https://python.org/downloads?utm_source=ba-deploy-ml-web-workshop) for all operating systems or follow this [installation guide](https://realpython.com/installing-python?utm_source=ba-deploy-ml-web-workshop).

Once installed successfully, confirm the version using the command:

```bash
python --version

or

python3 --version
```

If Python is installed correctly, you should have PIP installed. If it isn't, follow the steps in [this guide](https://pip.pypa.io/en/stable/installation?utm_source=ba-deploy-ml-web-workshop) to install PIP.

Hint:

```bash
python get-pip.py
```

</details>

<details>

<summary>Flask</summary>
<br />

> [Flask](https://github.com/pallets/flask?utm_source=ba-deploy-ml-web-workshop) is a lightweight Python micro framework for building web applications.

Install Flask using the command below:

```bash
pip install -U Flask
```

Once installed successfully, confirm the version using the command:

```bash
flask --version
```

</details>

<details>
<summary>FastAPI</summary>
<br />

> [FastAPI](https://github.com/tiangolo/fastapi?utm_source=ba-deploy-ml-web-workshop) is a a modern, fast (high-performance), web framework for building APIs with Python 3.7+ based on standard Python type hints.

Install FastAPI and the required [Uvicorn](https://uvicorn.org?utm_source=ba-deploy-ml-web-workshop) ASGI server using the command below:

```bash
pip install fastapi "uvicorn[standard]"
```

Once installed successfully, confirm the version using the command:

```bash
pip show fastapi

uvicorn --version
```

</details>

<details>

<summary>Nodejs and NPM</summary>
<br />

> [Nodejs](https://nodejs.org?utm_source=ba-deploy-ml-web-workshop) is an open-source, cross-platform JavaScript runtime environment.
>
> [NPM](https://npmjs.com?utm_source=ba-deploy-ml-web-workshop) is a package manager for installing JavaSript packages or modules.

Download and install Nodejs and NPM from [this website](https://nodejs.org/en/download?utm_source=ba-deploy-ml-web-workshop) for all operating systems or follow this [installation guide](https://docs.npmjs.com/downloading-and-installing-node-js-and-npm?utm_source=ba-deploy-ml-web-workshop).

Once installed successfully, confirm the version using the command:

```bash
node --version

npm --version
```

</details>

<details>

<summary>Reactjs 18 and Nextjs 13</summary>
<br />

> [Reactjs](https://react.dev?utm_source=ba-deploy-ml-web-workshop) is an open-source web and native JavaScript library for building user interfaces.
>
> [Nextjs](https://nextjs.org?utm_source=ba-deploy-ml-web-workshop) is an open-source React web development framework.

Automatically create a project with the latest version of Reactjs and Nextjs using the `create-next-app` command below:

```bash
npx create-next-app@latest
```

Consider reading Reactjs's [installation guide](https://react.dev/learn/installation?utm_source=ba-deploy-ml-web-workshop) to learn more.

</details>

## 👨🏾‍🏫 Workshop Lessons

1. [Introduction to Machine Learning](./lessons/01.md)
2. [Building a ML Model with Python]()
3. [Turning a ML Model into an API —Flask]()
4. [Turning a ML Model into an API —FastAPI]()
5. [Overview of Alternative Frameworks]()
6. [Building a Web Application for the ML Model —Flask/FastAPI]()
7. [Building a Web Application for the ML Model —JavaScript/Nextjs]()
8. [Deploying the Web Application to the Cloud]()
9. Bonus: [Building a ML Model with JavaScript/Tensorflow]()
10. Bonus: [Building Web AI Applications with Pre-trained Models (LLMs) and Vercel AI SDK]()

## 🚀 What's Next?

- Build something nice for fun to test all you've learned, open-source the code, and write about it if you want.
- Here's a [list of different projects](https://github.com/BolajiAyodeji/deploy-ml-web-workshop/discussions/categories/projects) built by participants of this workshop. If you've built something nice, feel free to [create a new discussion](https://github.com/BolajiAyodeji/deploy-ml-web-workshop/discussions/new?category=projects) and talk about your project.
- Tag me on X (Twitter) [@iambolajiayo](https://twitter.com/iambolajiayo) when you share your project.
- Open an issue in this repository or DM me [@iambolajiayo](https://twitter.com/iambolajiayo) if you have any questions or need help with anything.

## 📑 Further Resources

- [Lorem]()
- [How to Deploy a Machine Learning Model to the Web](https://blog.bolajiayodeji.com/how-to-deploy-a-machine-learning-model-to-the-web?utm_source=ba-deploy-ml-web-workshop)
- [Google's Machine Learning Crash Course](https://developers.google.com/machine-learning/crash-course?utm_source=ba-deploy-ml-web-workshop)
- [Google's Machine Learning Glossary](https://developers.google.com/machine-learning/glossary?utm_source=ba-deploy-ml-web-workshop)

## 👩🏽‍💻 Contributors Guide

1. Fork [this repository](https://github.com/BolajiAyodeji/deploy-ml-web-workshop) (learn how to do this [here](https://help.github.com/articles/fork-a-repo)).

2. Clone the forked repository like so:

```bash
git clone https://github.com/<your username>/deploy-ml-web-workshop.git && cd deploy-ml-web-workshop
```

3. If you're adding your project to the [Student Projects](#student-projects) section, add the new project to the list in the `README.md` file following the same format (name and link).

4. Make your changes and create a pull request ([learn how to do this](https://docs.github.com/en/github/collaborating-with-issues-and-pull-requests/creating-a-pull-request)).

5. I will attend to your pull request, provide some feedback, and eventually merge the PR!

## ⚖️ License

This repository is published under the [MIT](LICENSE) license.
