import { describe, it, expect } from "vitest"
import { validateFirstName, validateLastName, validateEmail, validateQueryType, validateMessage, validateCheckBox } from "./validations";

describe("Validate First Name input field", () => {
  it("should return false if 'First Name' is empty", () => {
    expect(validateFirstName('')).toBe(false)
  })

  it("should return true if first name 'First Name' is valid", () => {
    expect(validateFirstName('Fer')).toBe(true)
  })
})

describe("Validate Last Name input field", () => {
  it("should return false if 'Last Name' is empty", () => {
    expect(validateLastName('')).toBe(false)
  })
  
  it("should return true if 'Last Name' is valid", () => {
    expect(validateLastName('Pérez')).toBe(true)
    expect(validateLastName('Pérez Mojica')).toBe(true)
  })
})

describe('Validate Email input field', () =>  {
  it("should return false if email is empty", () => {
    expect(validateEmail('')).toBe(false)
  })

  it("should return false if at symbol (@) is missing", () => {
    expect(validateEmail('emailgmail.com')).toBe(false)
  })

  it("should return false if the domain is missing", () => {
    expect(validateEmail('email@gmailcom')).toBe(false)
  })

  it("should return false for emails with invalid caracters", () => {
    expect(validateEmail('em ail@gmail.com')).toBe(false)
    expect(validateEmail('em..ail@gmail.com')).toBe(false)
  })

  it("should return true if email is valid", () => {
    expect(validateEmail('email@gmail.com')).toBe(true)
    expect(validateEmail('email.edu@gmail.com')).toBe(true)
  })
})

describe('Validate Query Type', () => { 
  it("shouold return false if 'Query Type' has no selected option", () => {
    expect(validateQueryType('')).toBe(false)
  })

  it("shouold return true if 'Query Type' has selected 'option1'", () => {
    expect(validateQueryType('option1')).toBe(true)
  })

  it("shouold return true if 'Query Type' has selected 'option2'", () => {
    expect(validateQueryType('option2')).toBe(true)
  })
})

describe('Validate Message', () => { 
  it("should return false if 'Message' is empty", () => {
    expect(validateMessage('')).toBe(false)
  })

  it("should return true if 'Message' is valid", () => {
    expect(validateMessage('I appreciate it')).toBe(true)
  })
})

describe("Validate Checbox Concern", () => {
  it("should return false if Concern checkbox is not checked", () => {
    expect(validateCheckBox(false)).toBe(false)
  })

  it("should return true if Concern checkbox is checked", () => {
    expect(validateCheckBox(true)).toBe(true)
  })
})