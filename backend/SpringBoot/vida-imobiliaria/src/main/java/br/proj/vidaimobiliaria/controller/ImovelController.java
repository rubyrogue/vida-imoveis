package br.proj.vidaimobiliaria.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;

import br.proj.vidaimobiliaria.domain.Imovel;
import br.proj.vidaimobiliaria.repository.ImovelRepository;

@CrossOrigin(origins="http://localhost:3000")
@RestController
@RequestMapping("/imoveis")
public class ImovelController {

	//Ações
	@Autowired
	private ImovelRepository imovelRepository;
	
	//Lista imóveis
	@GetMapping
	public @ResponseBody List<Imovel> listar(){
		List<Imovel> imoveis = imovelRepository.findAll();
		return imoveis;
	}
	
	//Cadastra imóveis no BD
	@RequestMapping(method=RequestMethod.POST)
	public @ResponseBody Imovel saveImovel(@RequestBody Imovel imovel) {
		return imovelRepository.save(imovel);
	}
	
	//Filtra imóvel por código
	@RequestMapping(value="/{codigo}", method=RequestMethod.GET)
	public @ResponseBody Imovel filterImovel(@PathVariable Integer codigo) {
		return imovelRepository.findByCodigo(codigo);
	}
	
	//Edita o imóvel no BD
	@RequestMapping(method=RequestMethod.PUT)
	public @ResponseBody Imovel updateImovel(@RequestBody Imovel imovel) {
		return imovelRepository.save(imovel);
	}
	
	@RequestMapping(value="/{codigo}", method=RequestMethod.DELETE)
	public @ResponseBody void remove(@PathVariable Integer codigo) {
		Imovel imovel = filterImovel(codigo);
		this.imovelRepository.delete(imovel);
	}
}
