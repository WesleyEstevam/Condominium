import Swal from "sweetalert2";

export async function Importar() {
    const { value: file } = await Swal.fire({
        title: 'Selecione o arquivo',
        input: 'file',
        inputAttributes: {
          'accept': 'img/*',
          'aria-label': 'Upload your profile picture'
        }
      })
      
      if (file) {
        const reader = new FileReader()
        reader.onload = (e) => {
          Swal.fire({
            title: 'Seu arquivo foi foi enviado',
            imageUrl: e.target.result,
            imageAlt: 'The file picture'
          })
        }
        reader.readAsDataURL(file)
      }
}