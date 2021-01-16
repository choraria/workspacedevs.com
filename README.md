# Directory of Google Workspace Developers

## Purpose

There are those who *need* help and then there are those who **can** help.

This space is to help bridge that gap within the Google Workspace (previously, G Suite) Developers community and mostly geared towards users who work within the Apps Script ecosystem.

## Submit your profile

> Here's how to — [fork a repo](https://docs.github.com/en/free-pro-team@latest/github/getting-started-with-github/fork-a-repo#fork-an-example-repository) & [create a pull request from a fork](https://docs.github.com/en/free-pro-team@latest/github/collaborating-with-issues-and-pull-requests/creating-a-pull-request-from-a-fork)

* Fork this repository and create a new file inside [**src** > **people**](src/people) folder
* Name the file with the following naming convention -
    * all lower case
    * `first-last` (i.e. first name and last name, seperated by a hyphen); feel free to add middle name too, as applicable
    * `.md` extension
    * example file name: `sourabh-choraria.md`
* Use the following template and replace the default values with your own

    ```
    ---
    name: Your Name
    slug: /your-name
    location: City [or] State, Country
    intro: Short intro (~45 chars or less)
    image: https://link-to-self-hosted-image.png
    github: https://github.com/username/
    linkedin: https://www.linkedin.com/in/username/
    twitter: https://twitter.com/username
    website: https://example.com/
    facebook: https://www.facebook.com/username
    ---

    Something nice about yourself goes here — feel free to brag ;)
    ```
    * `name` & `slug` are mandatory; link to `image` is mandatory too but you're free to use a default avatar image as well (I used [these ones](https://www.w3schools.com/howto/img_avatar2.png) during testing and development)
        * `slug` needs to start with a `/` and you're free to design the slug based on whatever username you desire (could be the same as your Twitter handle, LinkedIn username etc.)
        * `image` needs to be in a 1:1 aspect ratio
            * ✅ 400 x 400
            * ✅ 1280 x 1280
            * ✅ 720 x 720
            * ❌ 1000 x 780
    * example file: [sourabh-choraria.md](src/people/sourabh-choraria.md)
* Finally, create a pull request

## Contributing

### Why

The [owner of this repo](https://github.com/schoraria911) is no expert in Gatsby and given how much of the code is customized and not themed, you're free to propose optimizations or improvements based on what you think the community could benefit from.

### How

1. Create a new issue describing what you have in mind.
    * Challenge / Problem statement
    * Proposed approach on solution
2. The repo owner will engage you and help validate the idea
3. Once everything is agreed upon, feel free to frok the repo and start building your solution
4. Finally, create a new pull request with the accepted, proposed changes