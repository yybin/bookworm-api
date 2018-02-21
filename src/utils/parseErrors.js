import _ from 'lodash'
export default function(errors) {
    const result = {}
    _.forEach(errors, (val, key) => {
        console.log(key)
        result[key] = val.message
    })
    return result
}