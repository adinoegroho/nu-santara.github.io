// Event ketika link diklik
$('.goTo').on('click', function(e)
{
	// Ambil isi href
	var tujuan = $(this).attr('href');

	// Tangkap elemen yg bersangkutan(YBS)
	var elemenTujuan = $(tujuan);

	console.log($(elemenTujuan).offset().top -64);

	// Pindahkan scroll
	$('body').animate
	({
		scrollTop: elemenTujuan.offset().top - 64
	}, 768, 'easeInOutExpo');
});
