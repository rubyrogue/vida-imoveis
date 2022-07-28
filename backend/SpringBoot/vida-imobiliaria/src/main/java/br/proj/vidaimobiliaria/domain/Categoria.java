package br.proj.vidaimobiliaria.domain;

import java.util.ArrayList;
import java.util.List;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.OneToMany;
import javax.persistence.Table;

import org.springframework.web.bind.annotation.RequestMapping;

@Entity
@Table(name="categoria")
@RequestMapping("categoria")
public class Categoria {
	
	@Id
	@Column(name="codigo", unique=true)
	@GeneratedValue(strategy=GenerationType.IDENTITY)
	private int codigo;
	
	@Column(name="nome", length=30, nullable=false, unique=true)
	private String nome;
	
//	@OneToMany(fetch=FetchType.EAGER)
//	@JoinColumn(name="categoria_codigo")
//	private List<Imovel> imoveis = new ArrayList<Imovel>();
	
	public Categoria() {
		
	}
	
	public Categoria(int codigo, String nome/*, List<Imovel> imoveis*/) {
		super();
		this.codigo = codigo;
		this.nome = nome;
		//this.imoveis = imoveis;
	}
	
//	public List<Imovel> getImoveis() {
//		return imoveis;
//	}
//
//	public void setImoveis(List<Imovel> imoveis) {
//		this.imoveis = imoveis;
//	}

	@Override
	public int hashCode() {
		final int prime = 31;
		int result = 1;
		result = prime * result + codigo;
		//result = prime * result + ((imoveis == null) ? 0 : imoveis.hashCode());
		result = prime * result + ((nome == null) ? 0 : nome.hashCode());
		return result;
	}
	@Override
	public boolean equals(Object obj) {
		if (this == obj)
			return true;
		if (obj == null)
			return false;
		if (getClass() != obj.getClass())
			return false;
		Categoria other = (Categoria) obj;
		if (codigo != other.codigo)
			return false;
//		if (imoveis == null) {
//			if (other.imoveis != null)
//				return false;
//		} else if (!imoveis.equals(other.imoveis))
//			return false;
		if (nome == null) {
			if (other.nome != null)
				return false;
		} else if (!nome.equals(other.nome))
			return false;
		return true;
	}
	@Override
	public String toString() {
		return "Categoria [codigo=" + codigo + ", nome=" + nome + "]";
	}
	public int getCodigo() {
		return codigo;
	}
	public void setCodigo(int codigo) {
		this.codigo = codigo;
	}
	public String getNome() {
		return nome;
	}
	public void setNome(String nome) {
		this.nome = nome;
	}
}
