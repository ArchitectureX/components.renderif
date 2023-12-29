# @architecturex/components.renderif

## RenderIf

The RenderIf component is a simple yet versatile React component designed to conditionally render its children based on the truthiness of the provided props. This component enhances readability and maintainability of conditional rendering logic in React applications.

### Installation

`npm install @architecturex/components.renderif`

### Props

- **children:** The content to be conditionally rendered. It can be a ReactElement or a string.
- **isTrue:** A boolean indicating whether the children should be rendered.
- **isFalse:** An optional boolean to provide an alternative condition for rendering.

### Usage

```javascript
import RenderIf from '@architecturex/components.renderif'

const MyComponent = () => {
  return (
    <div>
      <RenderIf isTrue={true}>
        <p>This will be rendered because isTrue is true</p>
      </RenderIf>

      <RenderIf isFalse={false}>
        <p>This will be rendered because isFalse is false</p>
      </RenderIf>

      <RenderIf isTrue={false}>
        <p>This will not be rendered because isTrue is false</p>
      </RenderIf>
    </div>
  )
}
```

### Contribution

Feel free to suggest improvements, report issues, or contribute to enhancing these components. Your feedback and contributions are welcome!
