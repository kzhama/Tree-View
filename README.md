# Folder View App

This project is a Folder View application bootstrapped with React Vite TypeScript template.

In this repository, you will find a React component that utilizes recursion to create a file tree. Mantine UI was chosen to expedite the process of styling the components, and Zustand was selected as the state manager.

To ensure effective folder and file management, it is important for the underlying data structure of the file tree to already include unique identifiers for each node. Therefore, the responsibility of assigning IDs to the nodes does not lie with the frontend implementation.

By asigning IDs on the front end in the data structure, I was able to easily implement features such as selecting files, tracking folder open/closed states, and incorporating the "CollapseAll" and "ExpandAll" functionality. Additionally, the IDs provided a straightforward way to determine the parent folder and dynamically add files or subfolders based on the parent's ID.

It is worth noting that while the current implementation focuses on creating the file tree and managing its state, drag and drop functionality has not been included. Implementing drag and drop features can be a complex task, requiring careful implementation and debugging, which may take considerable time.

I made a quick research on 'react-beautiful-dnd' library, which seems to work fine. Or even make a drag and drop feature from scratch, but will take even more time.

## Getting Started

To run the project locally, follow these steps:

### Prerequisites

- Node.js (version 14 or above) and npm (or yarn) should be installed on your machine.

### Clone the Repository

```
git clone https://github.com/kzhama/Tree-View.git
```

### Install Dependencies

Navigate to the project directory and install the required dependencies using npm or yarn:

```
npm install or yarn
```

### Run the Project

Once the dependencies are installed, start the development server using the following command:

```
npm/yarn run dev
```

## License

This project is licensed under the GNU General Public License (GPL), one of the most restrictive licenses available. The GPL ensures that the software and any derivative works remain open and freely available to users.

To view the full license text, please see the [LICENSE](LICENSE) file in the root directory of this project.

Please note that the GPL places significant restrictions on proprietary and closed-source software, as any derivative work or software incorporating GPL-licensed code must also be released under the GPL.

It is important to thoroughly review and understand the GPL terms and conditions before using or distributing this software.

For more information about the GNU General Public License, visit the [GNU website](https://www.gnu.org/licenses/gpl-3.0.html).
