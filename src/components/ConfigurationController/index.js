import './index.css'

import ConfigurationContext from '../../context/ConfigurationContext'

// const layoutCheckBoxes = [
//   {
//     id: 'content',
//     label: 'Content',
//   },
//   {
//     id: 'leftNavbar',
//     label: 'Left Navbar',
//   },
//   {
//     id: 'rightNavbar',
//     label: 'Right Navbar',
//   },
// ]

const ConfigurationController = () => (
  <ConfigurationContext.Consumer>
    {value => {
      const {
        showContent,
        showLeftNavbar,
        showRightNavbar,
        onToggleShowContent,
        onToggleShowLeftNavbar,
        onToggleShowRightNavbar,
      } = value

      const toggleContent = event => {
        onToggleShowContent()
        console.log(event.target.value)
      }

      const toggleLeftNavbar = event => {
        onToggleShowLeftNavbar(event.target.value)
      }

      const toggleRightNavbar = event => {
        onToggleShowRightNavbar(event.target.value)
      }

      return (
        <div className="layout-container">
          <h1 className="heading">Layout</h1>
          {/* <ul className="check-box-list">
            {layoutCheckBoxes.map(eachCheck => (
              <li key={eachCheck.id}>
                <input
                  type="checkbox"
                  id={eachCheck.id}
                  onChange={toggleCheckbox}
                  checked
                />
                <label htmlFor={eachCheck.id}>{eachCheck.label}</label>
              </li>
            ))}
          </ul> */}
          <div>
            <div>
              <input
                type="checkbox"
                id="content"
                onChange={toggleContent}
                checked={showContent}
              />
              <label htmlFor="content">Content</label>
            </div>
            <div>
              <input
                type="checkbox"
                id="left"
                onChange={toggleLeftNavbar}
                checked={showLeftNavbar}
              />
              <label htmlFor="left">Left Navbar</label>
            </div>
            <div>
              <input
                type="checkbox"
                id="right"
                onChange={toggleRightNavbar}
                checked={showRightNavbar}
              />
              <label htmlFor="right">Right Navbar</label>
            </div>
          </div>
        </div>
      )
    }}
  </ConfigurationContext.Consumer>
)

export default ConfigurationController
