import QRCode from 'qrcode'

export const useQrStore = defineStore('qr', () => {
  const input = ref<string>('')
  const qrImage = ref()
  const qrMatrix = ref<[][]>()
  const byteRound = ref<number>(90)

  const generateQRCode = async (value?: string | undefined) => {
    if (!value && !input.value) {
      return
    }

    if (!value && input.value) {
      value = input.value
    }

    qrImage.value = await QRCode.toDataURL(value, {
      margin: 2,
      width: 256,
    })

    const qr = QRCode.create(value, { margin: 2 })

    const binaryMatrix = qr.modules.data.reduce(
      (rows: number[][], cell: boolean, index: number) => {
        const rowIndex = Math.floor(index / qr.modules.size)
        if (!rows[rowIndex])
          rows[rowIndex] = []
        rows[rowIndex].push(cell ? 1 : 0)
        return rows
      },
      [],
    )

    qrMatrix.value = binaryMatrix
  }

  return {
    input,
    qrImage,
    qrMatrix,
    byteRound,

    generateQRCode,
  }
})
