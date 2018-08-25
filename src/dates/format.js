
// TODO: Language must be a prop
export const formatAs = (date, config) => (
    new Intl.DateTimeFormat('it', config).format(date)
)
