import EmployeeDisplay from "../components/about/employeeDisplay"
import Avatar from '../assets/images/avatar.png'

const employeeData = [
    {
        name: 'Devan Vanover',
        description: "Hello, I'm  Devan and I am the owner of First Class Cleaners  LLC located in Stafford Springs Connecticut and Devleigh’s Squeaky Clean LLC. In Myrtle Beach. As a mother of three small children, I know how challenging it can be to keep a home clean. That's why I started my business First Class Cleaners 3 years ago, and have expanded my services Devleigh's Squeaky Clean LLC to Myrtle Beach.  We want to help families like mine enjoy a clean and comfortable living space. My team and I are dedicated to providing personalized and dependable cleaning services.  Your satisfaction is our top priority",
        image: Avatar
    },
    {
        name: 'Daniel Gomez',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
        image: Avatar
    },
    {
        name: 'Mike Freeman',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
        image: Avatar
    }
]
export default function AboutPage() {
    return(
           <div style={{ marginTop: '100px' }}>
                    {employeeData.map((employee, index) => (
                        <EmployeeDisplay
                            key={index}
                            name={employee.name}
                            description={employee.description}
                            image={employee.image}
                        
                        />
                    ))}
                </div>
    )
}