import styled from '@emotion/styled'
import backgroundLogo from '../components/assets/bg_logo.svg'

export default function Contact() {
  return (
    <$FormContact name="contact" method="POST" data-netlify="true">
      <p>
        <$Labels>
          Name: <input type="text" name="name" />
        </$Labels>
      </p>
      <p>
        <$Labels>
          Email: <input type="email" name="email" />
        </$Labels>
      </p>
      <p>
        <$Labels>
          Role:
          <select name="role">
            <option value="">--Please choose an option--</option>
            <option value="Maintainer">Maintainer</option>
            <option value="Contributor">Contributor</option>
            <option value="Guild Member">Guild Member</option>
            <option value="Other">Other</option>
          </select>
        </$Labels>
      </p>
      <p>
        <$Labels>
          Message: <textarea name="message" />
        </$Labels>
      </p>
      <p>
        <$SubmitButton
          type="submit"
          onSubmit={(event) => {
            event.preventDefault()
          }}
        >
          submit
        </$SubmitButton>
      </p>
      <p>
        You can also find us on{' '}
        <a href="https://discord.gg/urQuPURusm">Discord</a>
      </p>
    </$FormContact>
  )
}
const $FormContact = styled('form')`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 20px;
  border: 1px solid #ccc;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
  background: url(${backgroundLogo}) no-repeat center/contain;
`
const $SubmitButton = styled('button')`
  border: 2px solid #101c2e;
  box-sizing: border-box;
  border-radius: 8px;
  width: 100%;
  height: 100%;
  text-transform: uppercase;
  cursor: pointer;
  font-style: normal;
  font-weight: 600;
  font-size: 0.9rem;
`
const $Labels = styled('label')`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-right: 10px;
  font-weight: 600;
  font-size: 0.9rem;
`
