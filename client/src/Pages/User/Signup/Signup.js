import React, { useState, useEffect } from 'react'
import userapi from '../../../axios-apis/api-user.js'
import { Preview } from './FormComponents/Preview'
import { Personal } from './FormComponents/Personal'
import { Location } from './FormComponents/Location'
import { Service } from './FormComponents/Service'
import logo from '../../../assets/images/sixLogo2.png'
import './Signup.css'

//this is the main parent element for the signup process. serves and collects data from four forms by using state to display current form
//handles all the data collection, formatting and processing

const Signup = () => {
    //set state for controlled form validation and data collection
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [confirm, setConfirm] = useState('')
    const [city, setCity] = useState('')
    const [state, setState] = useState('')
    const [branch, setBranch] = useState('')
    const [status, setStatus] = useState('')
    const [volunteer, setVolunteer] = useState('')
    //current form shows different components based on the stage of data collection
    const [currentForm, setCurrentForm] = useState('personal')
    const [fileName, setFileName] = useState('Select An Image')
    const [feedback, setFeedback] = useState('')
    //final form template
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        password: '',
        state: '',
        city: '',
        volunteer: '',
        branch: '',
        status: '',
        image: '',
        avatar: '',
    })

    useEffect(() => {
       if (currentForm === 'personal') {
        document.getElementById('step1').classList.add('active')
       } else if (currentForm === 'location') {
        document.getElementById('step2').classList.add('active')
       } else if (currentForm === 'service') {
        document.getElementById('step3').classList.add('active')
       }
       else if (currentForm === 'profile') {
        document.getElementById('step4').classList.add('active')
        document.getElementById('steps').classList.add('finished')
       }
    }, [currentForm])

    //personal data collection and validation
    let regxEmail = /.+\@.+\..+/
    const gatherPersonal = (e) => {
        e.preventDefault()
        if (password !== confirm) {
            setFeedback('Passwords must match')
        } else if (password === '' || confirm === '' || password === null || confirm === null) {
            setFeedback('Passwords are required')
        } else if (password.length < 5) {
            setFeedback('Password must be at least 5 characters')
        } else if (name === '' || email === '') {
            setFeedback('Name and Email are required')
        } else if (email.match(regxEmail) === null) {
            setFeedback('Please enter a valid Email address')
        }
        else {
            setFormData({ ...formData, name: name, email: email, password: password })
            setCurrentForm('location')
            setFeedback('')
        }
    }

    //geolocation data collection
    const gatherLocation = (e) => {
        e.preventDefault()
        if (city === '') {
            setFeedback('City is required')
        } else if (state === '') {
            setFeedback('State is required')
        } else {
            //ensures first letter of city is uppercase
            let upperCaseCity = city[0].toUpperCase() + city.substring(1)
            setFormData({ ...formData, city: upperCaseCity, state: state })
            setCurrentForm('service')
            setFeedback('')
        }
    }

    //service data collection
    const gatherService = (e) => {
        e.preventDefault()
        if (branch === '') {
            setFeedback('Branch is required')
        } else if (status === '') {
            setFeedback('Status is required')
        } else if (volunteer === '') {
            setFeedback('Volunteer is required')
        } else {
            setFeedback('')
            setFormData({ ...formData, volunteer: volunteer, branch: branch, status: status })
            setCurrentForm('profile')
        }
    }


    function handleAvatar(e) {
        const photoPreview = document.getElementById('photo-preview')
        const photoCircle = document.getElementById('photo-circle')
        const avatarBtn = document.getElementById('avatar-btn')
        let src = e.target.getAttribute('src')
        const img = document.createElement('img')
        img.setAttribute('src', src)
        img.classList.add('preview')
        photoPreview.append(img)
        photoCircle.replaceWith(photoPreview)
        avatarBtn.classList.add('d-none')
        setFormData({ ...formData, avatar: src })
        setFeedback('')
    }

    //photo data collection and display
    function gatherFile(e) {
        const photoPreview = document.getElementById('photo-preview')
        const photoCircle = document.getElementById('photo-circle')
        const avatarBtn = document.getElementById('avatar-btn')
        //logic to show and upload and read file to show user preview
        const files = e.target.files
        //creates and replaces input with selected image
        const img = document.createElement('img')
        img.classList.add('preview')
        img.file = files[0]
        photoPreview.append(img)
        photoCircle.replaceWith(photoPreview)
        avatarBtn.classList.add('d-none')
        const reader = new FileReader()
        reader.onload = (function (myImg) {
            return function (e) {
                myImg.src = e.target.result
            }
        })(img)
        reader.readAsDataURL(files[0])
        //state management 
        setFileName(files[0].name)
        setFormData({ ...formData, image: files[0] })
        setFeedback('')
    }

    //Final form compilation and auth sends with FormData constructor to create a two part form data and file 
    //Sends in required format to make use of formidable on the back end 
    const handleSignup = async (e) => {
        e.preventDefault()
        if (formData.image === '' && formData.avatar === '') {
            setFeedback('Please upload an image or select an avatar')
        }
        else {
            let form = new FormData()
            form.append('name', formData.name)
            form.append('email', formData.email)
            form.append('password', formData.password)
            form.append('city', formData.city)
            form.append('state', formData.state)
            form.append('branch', formData.branch)
            form.append('status', formData.status)
            form.append('volunteer', formData.volunteer)
            form.append('image', formData.image)
            form.append('avatar', formData.avatar)
            //call to api/server 
            try {
                const user = await userapi.signup(form)
                setFormData({})
                //set json webtoken for user auth
                const { token } = user.data
                window.sessionStorage.setItem('token', token)
                window.location = '/'
                setFeedback('')
            } catch (err) {
                if (err.response.data.error.code === 11000) {
                    setCurrentForm('personal')
                    setFeedback("That Email address is already in use")
                } else {
                    setFeedback("An unknown error occured, please try again later")
                }
            }
        }
    }

    return (
        <div className="form-box">
            <h5 className="text-center"><img className="logo-small" src={logo} alt="red six with stripes and text we got you" />
            Got Your Six will never share your personal information.</h5>
            <div className="container text-center">
            <div id="steps" className="ui steps">
                <div id="step1" className="step">
                    <div className="content">
                        <div className="title">Account</div>
                        <div className="description">Log-In Information</div>
                    </div>
                </div>
                <div id="step2" className="step">
                    <div className="content">
                        <div className="title">Location</div>
                        <div className="description">Geographical Information</div>
                    </div>
                </div>
                <div id="step3" className="step">
                    <div className="content">
                        <div className="title">Service</div>
                        <div className="description">Military Service</div>
                    </div>
                </div>
                <div id="step4" className="step">
                    <div className="content">
                        <div className="title">Profile</div>
                        <div className="description">Profile Preview</div>
                    </div>
                </div>
            </div>
            </div>
            <div className='form-group col-11 mx-auto my-2 p-2'>
                <form className="col-8 mx-auto">
                    {currentForm === 'personal' ? <Personal
                        name={name} setName={setName}
                        email={email} setEmail={setEmail}
                        password={password} setPassword={setPassword}
                        confirm={confirm} setConfirm={setConfirm}
                        gather={gatherPersonal}
                        feedback={feedback} /> : ''}
                    {currentForm === 'location' ? <Location state={state} setState={setState} city={city} setCity={setCity} gather={gatherLocation} feedback={feedback} /> : ''}
                    {currentForm === 'service' ? <Service volunteer={volunteer} setVolunteer={setVolunteer} branch={branch} setBranch={setBranch} status={status} setStatus={setStatus} gather={gatherService} feedback={feedback} /> : ''}
                </form>
                {currentForm === 'profile' ? <Preview newUser={true} signUp={handleSignup} handleAvatar={handleAvatar} data={formData} fileName={fileName} gather={gatherFile} feedback={feedback} /> : ''}
            </div>
        </div>
    )
}

export default Signup