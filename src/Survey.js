import { useState } from 'react';
import style from './Survey.module.css';

export default function Survey() {
    const [formData, setFormData] = useState({
        fname: '',
        lname: '',
        saddress: '',
        city: '',
        state: '',
        zip: '',
        phone: '',
        email: ''
    });

    const [submitted, setSubmitted] = useState(false);
    const [formattedData, setFormattedData] = useState({});

    const handleChange = (event) => {
        const {name, value} = event.target;
        setFormData({
            ...formData, [name]: value
        });
    };

    const handleSubmit = (event) => {
        event.preventDefault();

        const formatted = {
            ...formData,
            state: formData.state.toUpperCase(),
            fname: capitalizeFirstLetter(formData.fname),
            lname: capitalizeFirstLetter(formData.lname),
            city: capitalizeFirstLetter(formData.city),
            zip: formatZip(formData.zip),
            phone: formatPhone(formData.phone)
        };

        setFormattedData(formatted);
        setSubmitted(true);
    };

    const capitalizeFirstLetter = string => string.charAt(0).toUpperCase() +
        string.slice(1).toLowerCase();

    const formatZip = zip => zip.slice(0, 3) + ' ' + zip.slice(3);

    const formatPhone = phone => phone.replace(/(\d{3})(\d{3})(\d{4})/, '$1-$2-$3');

    return(
        <form onSubmit={handleSubmit} className={style.form}>
            <h1 className={style.h1}>Membership</h1>
            <input
                className={style.input}
                name="fname"
                value={formData.fname}
                onChange={handleChange}
                type="text"
                placeholder="First Name"
                required
            />
            <input
                className={style.input}
                name="lname"
                value={formData.lname}
                onChange={handleChange}
                type="text"
                placeholder="Last Name"
                required
            />
            <input
                className={style.input}
                name="saddress"
                value={formData.saddress}
                onChange={handleChange}
                type="text"
                placeholder="Street Address"
                required
            />
            <input
                className={style.input}
                name="city"
                value={formData.city}
                onChange={handleChange}
                type="text"
                placeholder="City"
                required
            />
            <input
                className={style.input}
                name="state"
                value={formData.state}
                onChange={handleChange}
                type="text"
                placeholder="State"
                maxLength="2"
                required
            />
            <input
                className={style.input}
                name="zip"
                value={formData.zip}
                onChange={handleChange}
                type="text"
                placeholder="Zip Code"
                maxLength="6"
                required
            />
            <input
                className={style.input}
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                type="tel"
                placeholder="Phone Number"
                maxLength="10"
                required
            />
            <input
                className={style.input}
                name="email"
                value={formData.email}
                onChange={handleChange}
                type="email"
                placeholder="Email Address"
                required
            />
            <input
                type="submit"
                value="REGISTER"
                className={style.submit}
            />
            {submitted && (
            <div>
                <p>{formattedData.fname}</p>
                <p>{formattedData.lname}</p>
                <p>{formattedData.saddress}</p>
                <p>{formattedData.city}</p>
                <p>{formattedData.state}</p>
                <p>{formattedData.zip}</p>
                <p>{formattedData.phone}</p>
                <p>{formattedData.email}</p>
            </div>
            )}
        </form>
    );
}