mapboxgl.accessToken = 'pk.eyJ1IjoiaGFycnkxMjM0OTgiLCJhIjoiY2s4OXh1c3BqMGFsZzNvbXA3YmYyaGFhYSJ9.wmVMiMxlSqpzJPsj-UXr3Q';
var map = new mapboxgl.Map({
    container: 'map',
    style: 'mapbox://styles/mapbox/dark-v10',
    zoom: 3.8,
    center: [82, 22]
});

var popup = new mapboxgl.Popup({ offset: 25 })
    .setHTML(
        `<h3>Adosh Singh,</h3><p>Vasundhara, Ghaziabad, U.P, India</p><span style="color:rgb(0, 180, 153);">@</span><span>:adoshbhanoo@gmail.com</span>`
    )

const marker1 = new mapboxgl.Marker({ color: 'rgb(5, 253, 216)' })
    .setLngLat([77.362791, 28.652892])
    .setPopup(popup)
    .addTo(map);

const sendEmail = () => {
    alert("Message sent successfully!");
};