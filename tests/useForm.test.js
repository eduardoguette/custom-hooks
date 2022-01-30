import { renderHook, act } from '@testing-library/react-hooks';
import { useForm } from '../../hooks/useForm';

describe('Pruebas en useForm', () => {
  const initialForm = {
    name: 'Eduardo',
    email: 'eduardo@gmail.com',
  };

  test('Debe de regresar el formulario por defecto', () => {
    const { result } = renderHook(() => useForm(initialForm));
    const [values, handleInputChange, reset] = result.current;
    expect(values).toEqual( initialForm );
    expect(typeof handleInputChange).toBe('function');
    expect(typeof reset).toBe('function');
  });

  test('Debe de cambiar el valor del formulario (cambiar name)', () => {
    const { result } = renderHook(() => useForm(initialForm));
    const [, handleInputChange] = result.current;

    act(() => {
      handleInputChange({
        target:{
          name: "name",
          value: "Jhoan"
        }
      })
    })

    const [formValues] = result.current
    
    expect(formValues).toEqual({...initialForm, name: "Jhoan"})

  });

  test('Debe de re-establecer el valor del formulario con RESET', () => {
    const { result } = renderHook(() => useForm(initialForm));
    const [, handleInputChange, reset] = result.current;

    act(() => {
      handleInputChange({
        target:{
          name: "name",
          value: "Jhoan"
        }
      })
      reset()
    })

    const [formValues] = result.current
    
    expect(formValues).toEqual(initialForm)

  });


  

});
