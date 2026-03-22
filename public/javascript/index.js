
// AXİOS POST FUNCTİON
function axios_data(url, data) {
    const base_url = window.location.origin
    let myPromise = new Promise(function (resolve, reject) {
        axios.post(`${base_url}/${url}`, data, {
            headers: {
                'Content-Type': 'application/json',
            },
        }
        ).then((response) => {
            resolve(response)
        }).catch(err => console.log(err, "index js axios"))
    });
    return myPromise
}
// AXİOS POST FUNCTİON

$(() => {
    $('form.contact-form button[name="submit"]').on('click', async function (event) {
        event.preventDefault();
        const data_input = $('form.contact-form input')
        const data_textarea = $('form.contact-form textarea')
        for (let index = 0; index < 4; index++) {
            const element = data_input[index];
            const data_element = $(element).val()
            const data_element_length = data_element.length
            if (data_element_length > 0) { $(element).addClass('is-invalid').removeClass('is-valid') }
            if (data_element_length === 0) { $(element).addClass('is-valid').removeClass('is-invalid') }
        }
        const data_textarea_value = $(data_textarea).val()
        const data_textarea_value_check = data_textarea_value.length
        if (data_textarea_value_check > 0) { $(data_textarea).addClass('is-invalid').removeClass('is-valid') }
        if (data_textarea_value_check === 0) { $(data_textarea).addClass('is-valid').removeClass('is-invalid') }
        const check_input = $('form.contact-form input.is-valid')
        const check_textarea = $('form.contact-form textarea.is-valid')
        const check_input_length = check_input.length
        const check_textarea_length = check_textarea.length
        if (check_input_length > 0 || check_textarea_length > 0) {
            alert('bilgiler eksik')
        }
        if (check_input_length === 0 && check_textarea_length === 0) {
            const input_data = $('form.contact-form input.is-invalid')
            const textarea_data = $('form.contact-form textarea.is-invalid').val()
            const data_array = new Array
            for (let index = 0; index < 4; index++) {
                const element = input_data[index];
                const element_value = $(element).val()
                data_array.push(element_value)
            }
            data_array.push(textarea_data)
            const url = 'contact_mail'
            const data = data_array
            const myPromise = await axios_data(url, data)
            myPromise.then((res) => console.log(res))
            alert('gönderim başarılı')
        }
    })

}) /// İLETİŞİM MAİL 

$(() => {
    var swiper = new Swiper(".mySwiper", {
        slidesPerView: 2,
        spaceBetween: 30,
        centeredSlides: true,
        pagination: {
            el: ".swiper-pagination",
            clickable: true,
        },
    });
}) //   Initialize Swiper BLOG
$(() => {
    const baslangic = 3
    const yuklenecek_sayi = 3
    const data_blog = $('#blog .single-news')
    const data_blog_length = $('#blog .single-news').length

    function data_src() {
        const div_d_none_sayisi = $('#blog .d-none').length
        const yuklu_div = data_blog_length - div_d_none_sayisi
        for (let index = 0; index < yuklu_div; index++) {
            const data_img = $(data_blog[index]).children().children('a').children('img')
            const data_src = $(data_img).attr('data-src')
            $(data_img).attr('src', data_src)
        }
    }

    for (let index = baslangic; index < data_blog_length; index++) {
        $(data_blog[index]).addClass('d-none')

    }
    data_src()
    $('button[name="yukle"]').on('click', function () {
        const data_blog_d_none = $('#blog .d-none').length
        const update_yukle = data_blog_length - data_blog_d_none + yuklenecek_sayi
        for (let index = 0; index < update_yukle; index++) {
            $(data_blog[index]).removeClass('d-none')
        }
        data_src()
    });

})// YÜKLE BUTONU







$(async () => {
    const url = 'blog/create'
    const data = {
        image: '1',
        title: 'lorem ipsum',
        body: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.Quas expedita est sit voluptates necessitatibus molestiasveritatis? Fugit quasi tempore exercitationem, consectetur ullam id.Nemo, sit expedita facere explicabo sapientedolore?'
    }
    //   await axios_data(url, data)
}) // blog yükle