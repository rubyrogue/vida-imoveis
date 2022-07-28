package br.proj.vidaimobiliaria.controller;

import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/imobiliaria")
public class ImobiliariaController {
	
	@RequestMapping("/")
	public String exibirMensagem() {
		return "!!";
	}
}
